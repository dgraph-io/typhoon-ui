/** @jsx jsx */

import { jsx } from "@emotion/react";
import { styles } from "./Select.styles";
import { useState, useRef, useEffect, useCallback } from "react";
import { stylegun } from "helpers/stylegun";
import { uuid } from "helpers/utils";
import { Button, Text, Stack, Container } from "components";
import { keyCodes } from "helpers/constants";
import { theme } from "../../../theme";
import { SelectPropsType, ValueType } from "./Select.types";

const checkIfParent = (parent: any, child: any) => {
    if (parent && parent.contains) {
        return parent.contains(child);
    }
    return false;
};

const getPositionStyles = (
    ref: React.RefObject<HTMLButtonElement>,
    maxHeight: number,
    heightOffset: number
) => {
    if (ref.current) {
        const { bottom } = ref.current.getBoundingClientRect();
        if (window.innerHeight - bottom <= maxHeight + heightOffset) {
            return {
                bottom: "100%",
            };
        }
    }

    return { top: "100%" };
};
const Select = ({
    selected,
    label,
    values,
    fullWidth,
    onSelect,
    disabled,
    maxHeight = 300,
    heightOffset = 0,
    buttonStyles = {},
    listStyles = {},
    styles: stylesProp = {},
}: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLButtonElement>(null);
    const listboxRef = useRef(null);
    const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
    const clickAway = useCallback(
        (e: MouseEvent) => {
            if (
                listboxRef.current !== e.target &&
                selectRef.current !== e.target &&
                !checkIfParent(selectRef.current, e.target) &&
                !checkIfParent(listboxRef.current, e.target)
            ) {
                setIsOpen(false);
                document.removeEventListener("mousedown", clickAway);
            }
        },
        [listboxRef, selectRef]
    );

    const closeList = useCallback(() => {
        setIsOpen(false);
        document.removeEventListener("mousedown", clickAway);
    }, [clickAway]);

    const openList = useCallback(() => {
        setIsOpen(true);
        document.addEventListener("mousedown", clickAway);
    }, [clickAway]);

    const toggleList = useCallback(() => {
        if (!isOpen) {
            openList();
        } else {
            closeList();
        }
    }, [openList, closeList, isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen && e.keyCode === keyCodes.DOWN) {
                setActiveOptionIndex((activeOptionIndex + 1) % values.length);
            } else if (isOpen && e.keyCode === keyCodes.UP) {
                setActiveOptionIndex(
                    activeOptionIndex === 0
                        ? values.length - 1
                        : activeOptionIndex - 1
                );
            } else if (
                isOpen &&
                [keyCodes.SPACEBAR, keyCodes.ENTER].includes(e.keyCode) &&
                activeOptionIndex > -1
            ) {
                onSelect({
                    value: values[activeOptionIndex],
                    index: activeOptionIndex,
                });
                setIsOpen(false);
            } else if (isOpen && [keyCodes.ESCAPE].includes(e.keyCode)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeOptionIndex, isOpen, values, onSelect]);

    return (
        <div
            css={stylegun({
                css: {
                    ...(fullWidth ? {} : { width: 300 }),
                    ...stylesProp,
                    ...styles.SelectContainer,
                },
                theme: theme,
            })}
        >
            <Button
                ref={selectRef}
                onClick={toggleList}
                fullWidth={fullWidth}
                styles={{ ...styles.ButtonStyles, ...buttonStyles }}
                variant="murmur"
                aria-haspopup="listbox"
                disabled={disabled}
            >
                <Stack align="center" justify="space-between" fullWidth={true}>
                    <Container styles={styles.SelectLabelContainerStyles}>
                        {selected ? selected.label : label}
                    </Container>
                    <Container
                        styles={{
                            ...styles.ChevronStyles,
                            transform: isOpen
                                ? "rotate(-135deg) translateX(-3px)"
                                : "rotate(45deg) translateY(-3px)",
                        }}
                    />
                </Stack>
            </Button>

            {isOpen && (
                <ul
                    ref={listboxRef}
                    tabIndex={-1}
                    role="listbox"
                    aria-expanded={isOpen}
                    css={stylegun({
                        css: {
                            maxHeight: `${maxHeight}px`,
                            ...styles.OptionsList,
                            ...getPositionStyles(
                                selectRef,
                                maxHeight,
                                heightOffset
                            ),
                            ...listStyles,
                        },
                        theme: theme,
                    })}
                >
                    {values.map((value: ValueType, index: number) => {
                        const isSelected = index === activeOptionIndex;
                        const OptionsListItemStyles = {
                            ...styles.OptionsListItem,
                            ...(isSelected
                                ? styles.FocusedOptionsListItem
                                : {}),
                        };
                        return (
                            <li
                                role="option"
                                aria-selected={isSelected}
                                key={value.id || uuid()}
                                onClick={() => {
                                    setIsOpen(false);
                                    onSelect({ value, index });
                                    setActiveOptionIndex(-1);
                                }}
                                onMouseOver={() => {
                                    setActiveOptionIndex(index);
                                }}
                                ref={ref => {
                                    if (activeOptionIndex === index) {
                                        ref && ref.focus();
                                    }
                                }}
                                tabIndex={0}
                                css={stylegun({
                                    css: OptionsListItemStyles,
                                    theme: theme,
                                })}
                            >
                                <Text>{value.label}</Text>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Select;
