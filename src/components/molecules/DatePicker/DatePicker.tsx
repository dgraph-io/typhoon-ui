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
import { getDateString, mapToSubArrays, getDatePickerStyles } from "./utils";
import { weekDays } from "./constants";
import { TimePicker } from "./TimePicker";
import { useTimePicker } from "./useTimePicker";

export default ({
    disableFutureDate = false,
    showSelection = false,
    onChange,
    onClose,
    now = new Date(),
    showTime,
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
    showTime?: boolean;
}) => {
    const {
        monthMap,
        selectedMonth,
        selectedYear,
        days,
        onNextMonth,
        onPreviousMonth,
    } = useCalendar(now);

    const [startDate, setStartDate] = useState<null | number>(null);
    const [endDate, setEndDate] = useState<null | number>(null);

    const {
        timeForm,
        dateConstructor,
        updateStartTimeHour,
        updateEndTimeMinute,
        updateEndTimeHour,
        updateStartTimeMinute,
        setValue,
    } = useTimePicker(now);

    const {
        startTimeHour,
        startTimeMinute,
        endTimeHour,
        endTimeMinute,
        startTimezone,
        endTimezone,
    } = timeForm;

    const onClickDate = useCallback(
        (date: number) => {
            if (startDate !== null && endDate !== null) {
                if (showTime) {
                    const newStartDate = dateConstructor(
                        date,
                        startTimezone.value === "AM"
                            ? startTimeHour.value
                            : startTimeHour.value + 12,
                        startTimeMinute.value
                    );

                    setStartDate(Number(newStartDate));
                    setEndDate(null);
                } else {
                    setStartDate(date);
                    setEndDate(null);
                }
            } else if (startDate === null) {
                if (showTime) {
                    const newStartDate = dateConstructor(
                        date,
                        startTimezone.value === "AM"
                            ? startTimeHour.value
                            : startTimeHour.value + 12,
                        startTimeMinute.value
                    );

                    setStartDate(Number(newStartDate));
                } else {
                    setStartDate(date);
                }
            } else {
                if (new Date(date).getTime() > new Date(startDate).getTime()) {
                    if (showTime) {
                        const newEndDate = dateConstructor(
                            date,
                            endTimezone.value === "AM"
                                ? endTimeHour.value
                                : endTimeHour.value + 12,
                            endTimeMinute.value
                        );
                        setEndDate(Number(newEndDate));
                    } else {
                        setEndDate(date);
                    }
                } else {
                    const newStartDate = dateConstructor(
                        date,
                        startTimezone.value === "AM"
                            ? startTimeHour.value
                            : startTimeHour.value + 12,
                        startTimeMinute.value
                    );
                    setStartDate(Number(newStartDate));
                    const newEndDate = dateConstructor(
                        date,
                        endTimezone.value === "AM"
                            ? endTimeHour.value
                            : endTimeHour.value + 12,
                        endTimeMinute.value
                    );
                    setEndDate(Number(newEndDate));
                }
            }
        },
        [endDate, startDate]
    );

    return (
        <Card
            styles={{
                paddingX: 0,
                width: showTime ? "500px" : "300px",
                paddingY: 2,
            }}
        >
            <Stack fullWidth={true} align="center" wrap="nowrap">
                <Stack
                    justify="center"
                    align="center"
                    direction="horizontal"
                    styles={{ width: showTime ? "60%" : "inherit" }}
                >
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
                                    endDate
                                        ? getDateString(endDate)
                                        : "End date"
                                }
                            />
                        </Stack>
                    )}
                    <Stack
                        align="center"
                        justify="center"
                        direction="horizontal"
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
                                <Container
                                    key={weekDay}
                                    styles={{ ...styles.Box }}
                                >
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

                        <Stack direction="horizontal" justify="space-between">
                            <Stack direction="vertical">
                                {mapToSubArrays(days, 7).map((week, index) => (
                                    <Stack
                                        direction="horizontal"
                                        key={weekDays[index]}
                                    >
                                        {week.map(day => {
                                            const dayObject = new Date(
                                                day.timestamp
                                            );

                                            const getDateFromTimeStamp = new Date(
                                                day.timestamp
                                            ).toDateString();

                                            const isSelected =
                                                getDateFromTimeStamp ===
                                                    new Date(
                                                        Number(startDate)
                                                    ).toDateString() ||
                                                getDateFromTimeStamp ===
                                                    new Date(
                                                        Number(endDate)
                                                    ).toDateString();

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
                                                    styles={getDatePickerStyles(
                                                        now,
                                                        dayObject,
                                                        day,
                                                        isSelected,
                                                        startDate,
                                                        endDate
                                                    )}
                                                    onClick={() =>
                                                        onClickDate(
                                                            day.timestamp
                                                        )
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
                    </Stack>
                </Stack>

                {showTime && (
                    <Stack>
                        <TimePicker
                            now={now}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                            startDate={startDate}
                            endDate={endDate}
                            form={timeForm}
                            setValue={setValue}
                            updateStartTimeHour={updateStartTimeHour}
                            updateStartTimeMinute={updateStartTimeMinute}
                            updateEndTimeHour={updateEndTimeHour}
                            updateEndTimeMinute={updateEndTimeMinute}
                        />
                    </Stack>
                )}
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
                    disabled={
                        startDate === null ||
                        endDate === null ||
                        new Date(startDate).toJSON() ===
                            new Date(endDate).toJSON() ||
                        new Date(startDate) > new Date(endDate)
                    }
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
        </Card>
    );
};
