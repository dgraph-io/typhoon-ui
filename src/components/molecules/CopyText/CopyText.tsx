/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { stylegun } from "../../../helpers/stylegun";
import { styles } from "./CopyText.styles";
import { Input, Button } from "components";
import { ReactComponent as CopyIcon } from "./svgs/copy.svg";
import Stack from "components/layouts/Stack/Stack";
import { useTheme } from "hooks/useTheme";
import Text from "components/atoms/Text/Text";
import { CopyTextPropsType } from "./CopyText.types";

const CopyText = ({
    text,
    onClick,
    styles: stylesProp = {},
}: CopyTextPropsType): JSX.Element => {
    const theme = useTheme();
    const [isToastVisible, setIsToastVisible] = useState(false);

    const onCopy = () => {
        const copyText: any = document.createElement("input");
        copyText.style.opacity = 0;
        copyText.value = text;
        document.body.appendChild(copyText);
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
        document.body.removeChild(copyText);
        setIsToastVisible(true);
        setTimeout(setIsToastVisible.bind(null, false), 1000);
        if (onClick) {
            onClick(text);
        }
    };
    return (
        <Stack
            styles={stylegun({
                css: { ...styles.CopyTextContainer, ...stylesProp },
                theme,
            })}
        >
            <Input value={text} styles={styles.Input} disabled={true} />
            <Button variant="ghost" styles={styles.Button} onClick={onCopy}>
                <CopyIcon height={"24px"} width={"24px"} />
            </Button>
            <div
                css={stylegun({
                    css: {
                        ...styles.CopiedToast,
                        opacity: isToastVisible ? 1 : 0,
                    },
                    theme,
                })}
            >
                <Text color="white">Copied</Text>
            </div>
        </Stack>
    );
};

export default CopyText;
