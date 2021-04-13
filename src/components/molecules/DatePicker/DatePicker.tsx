import React, { useCallback, useState } from "react";
import Card from "components/atoms/Card/Card";
import Text from "components/atoms/Text/Text";
import { useCalendar } from "hooks/date/useCalendar";
import Stack from "components/layouts/Stack/Stack";
import { ReactComponent as LeftIcon } from "./icons/left.svg";
import { ReactComponent as RightIcon } from "./icons/right.svg";
import Button from "components/atoms/Button/Button";
import Container from "components/layouts/Container/Container";
import { styles } from "./DatePicker.styles";
import Input from "components/atoms/Input/Input";
import { getDateString, isDateInBetween, mapToSubArrays } from "./utils";
import { weekDays } from "./constants";

export default ({
    disableFutureDate = false,
    showSelection = false,
    onChange,
    onClose,
    now = new Date(),
}: {
    onChange: ({
        start,
        end,
        step,
    }: {
        start: Date;
        end: Date;
        step: string;
    }) => void;
    onClose: () => void;
    disableFutureDate?: boolean;
    showSelection?: boolean;
    now?: Date;
}) => {
    const {
        monthMap,
        selectedMonth,
        selectedYear,
        days,
        onNextMonth,
        onPreviousMonth,
    } = useCalendar();

    const [startDate, setStartDate] = useState<null | number>(null);
    const [endDate, setEndDate] = useState<null | number>(null);

    const onClickDate = useCallback(
        (date: number) => {
            if (startDate !== null && endDate !== null) {
                setStartDate(date);
                setEndDate(null);
            } else if (startDate === null) {
                setStartDate(date);
            } else {
                if (new Date(date).getTime() > new Date(startDate).getTime()) {
                    setEndDate(date);
                } else {
                    setStartDate(date);
                    setEndDate(startDate);
                }
            }
        },
        [endDate, startDate]
    );
    return (
        <Card styles={{ paddingX: 0, width: "300px", paddingY: 2 }}>
            <Stack direction="vertical" justify="center" align="center" gap={2}>
                {showSelection && (
                    <Stack direction="horizontal" gap={1}>
                        <Input
                            styles={styles.DateInput}
                            value={
                                startDate
                                    ? getDateString(startDate)
                                    : "Start date"
                            }
                        />
                        <Input
                            styles={styles.DateInput}
                            value={
                                endDate ? getDateString(endDate) : "End date"
                            }
                        />
                    </Stack>
                )}
                <Stack
                    direction="horizontal"
                    justify="space-around"
                    align="center"
                >
                    <Button
                        onClick={onPreviousMonth}
                        styles={{
                            background: "transparent",
                            height: "fit-content",
                        }}
                    >
                        <LeftIcon height="14px" width="14px" />
                    </Button>
                    <Text
                        styles={{ width: "140px", textAlign: "center" }}
                        variant={3}
                        weight={700}
                    >{`${monthMap[selectedMonth]} ${selectedYear}`}</Text>
                    <Button
                        styles={{
                            background: "transparent",
                            height: "fit-content",
                        }}
                        onClick={onNextMonth}
                    >
                        <RightIcon height="14px" width="14px" />
                    </Button>
                </Stack>
                <Stack direction="vertical">
                    <Stack direction="horizontal">
                        {weekDays.map(weekDay => (
                            <Container key={weekDay} styles={{ ...styles.Box }}>
                                <Text
                                    color="grey.light"
                                    variant={2}
                                    weight={700}
                                >
                                    {weekDay}
                                </Text>
                            </Container>
                        ))}
                    </Stack>
                    <Stack direction="vertical" gap={1}>
                        {mapToSubArrays(days, 7).map((week, index) => (
                            <Stack direction="horizontal" key={weekDays[index]}>
                                {week.map(day => {
                                    const dayObject = new Date(day.timestamp);
                                    const isSelected =
                                        day.timestamp === startDate ||
                                        day.timestamp === endDate;
                                    return (
                                        <Button
                                            disabled={
                                                disableFutureDate &&
                                                now.getTime() <
                                                    dayObject.getTime()
                                                    ? true
                                                    : false
                                            }
                                            key={day.timestamp}
                                            styles={{
                                                ...styles.Box,
                                                ...styles.Date,
                                                ...(now.toDateString() ===
                                                dayObject.toDateString()
                                                    ? styles.Today
                                                    : {}),
                                                ...(day.monthDiff !== 0
                                                    ? styles.OtherMonth
                                                    : {}),
                                                ...(isSelected
                                                    ? styles.SelectedDate
                                                    : {}),
                                                ...(isDateInBetween(
                                                    day.timestamp,
                                                    startDate,
                                                    endDate
                                                )
                                                    ? styles.InBetweenDate
                                                    : {}),
                                                ...(day.timestamp ===
                                                    startDate &&
                                                endDate !== null
                                                    ? styles.TrailingRight
                                                    : {}),
                                                ...(day.timestamp === endDate &&
                                                startDate !== null
                                                    ? styles.TrailingLeft
                                                    : {}),
                                            }}
                                            onClick={() =>
                                                onClickDate(day.timestamp)
                                            }
                                        >
                                            {day.date}
                                        </Button>
                                    );
                                })}
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                <Stack
                    direction="horizontal"
                    gap={1}
                    justify="flex-end"
                    fullWidth={true}
                >
                    <Button
                        variant="ghost"
                        styles={styles.ActionButton}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="whistle"
                        styles={styles.ActionButton}
                        disabled={startDate === null || endDate === null}
                        onClick={() => {
                            startDate &&
                                endDate &&
                                onChange({
                                    start: new Date(startDate),
                                    end: new Date(endDate),
                                    step: "day",
                                });
                            onClose();
                        }}
                    >
                        Apply
                    </Button>
                </Stack>
            </Stack>
        </Card>
    );
};
