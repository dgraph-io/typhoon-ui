import React, { useEffect } from "react";
import { Stack, Text, Container, Input, Button } from "components";
import { styles } from "./DatePicker.styles";
import { useTimePicker } from "./useTimePicker";
import { FormConfig } from "hooks/form/useForm.types";
import { TimePickerForm } from "./TimePicker.types";

export const TimePicker = ({
    setStartDate,
    setEndDate,
    startDate,
    endDate,
    form: timeForm,
    setValue,
    updateStartTimeHour,
    updateStartTimeMinute,
    updateEndTimeHour,
    updateEndTimeMinute,
    now = new Date(),
}: {
    now?: Date;
    setStartDate: (date: any) => void;
    setEndDate: (date: any) => void;
    startDate: null | number;
    endDate: null | number;
    form: FormConfig<TimePickerForm>;
    setValue: any;
    updateStartTimeHour: (hour: number) => void;
    updateStartTimeMinute: (minute: number) => void;
    updateEndTimeHour: (hour: number) => void;
    updateEndTimeMinute: (minute: number) => void;
}) => {
    const { dateConstructor } = useTimePicker(now);

    const {
        startTimezone,
        endTimezone,
        startTimeHour,
        startTimeMinute,
        endTimeHour,
        endTimeMinute,
    } = timeForm;

    useEffect(() => {
        if (startDate && startTimeHour.value) {
            const date = dateConstructor(
                startDate,
                startTimezone.value === "AM"
                    ? startTimeHour.value
                    : startTimeHour.value + 12,
                startTimeMinute.value
            );

            setStartDate(date);
        }
    }, [startTimeHour.value, startTimezone.value]);

    useEffect(() => {
        if (startDate && startTimeMinute.value) {
            const date = dateConstructor(
                startDate,
                startTimezone.value === "AM"
                    ? startTimeHour.value
                    : startTimeHour.value + 12,
                startTimeMinute.value
            );

            setStartDate(date);
        }
    }, [startTimeMinute.value, startTimezone.value]);

    useEffect(() => {
        if (endDate && endTimeHour.value) {
            const date = dateConstructor(
                endDate,
                endTimezone.value === "AM"
                    ? endTimeHour.value
                    : endTimeHour.value + 12,
                endTimeMinute.value
            );

            setEndDate(date);
        }
    }, [endTimeHour.value, endTimezone.value]);

    useEffect(() => {
        if (endDate && endTimeMinute.value) {
            const date = dateConstructor(
                endDate,
                endTimezone.value === "AM"
                    ? endTimeHour.value
                    : endTimeHour.value + 12,
                endTimeMinute.value
            );

            setEndDate(date);
        }
    }, [endTimeMinute.value, endTimezone.value]);

    return (
        <Stack styles={{ marginLeft: 3 }}>
            {timeForm && (
                <Stack direction="vertical" gap={2}>
                    <Text color="pink" weight={600}>
                        Start Time
                    </Text>
                    <Stack align="center">
                        <Stack direction="vertical">
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform:
                                        "rotate(-135deg) translateX(-3px)",
                                }}
                                onClick={() =>
                                    updateStartTimeHour(startTimeHour.value + 1)
                                }
                            />
                            <Input
                                value={startTimeHour.value}
                                type="number"
                                max={11}
                                min={0}
                                onChange={e =>
                                    updateStartTimeHour(Number(e.target.value))
                                }
                                styles={styles.InputStyles}
                            />

                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform: "rotate(45deg) translateY(-3px)",
                                }}
                                onClick={() =>
                                    updateStartTimeHour(startTimeHour.value - 1)
                                }
                            />
                        </Stack>

                        <Text weight={600}>:</Text>

                        <Stack direction="vertical">
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform:
                                        "rotate(-135deg) translateX(-3px)",
                                }}
                                onClick={() =>
                                    updateStartTimeMinute(
                                        startTimeMinute.value + 30
                                    )
                                }
                            />
                            <Input
                                value={startTimeMinute.value}
                                onChange={e =>
                                    setValue({
                                        startTimeMinute: Number(e.target.value),
                                    })
                                }
                                styles={styles.InputStyles}
                            />
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform: "rotate(45deg) translateY(-3px)",
                                }}
                                onClick={() =>
                                    updateStartTimeMinute(
                                        startTimeMinute.value - 30
                                    )
                                }
                            />
                        </Stack>
                        <Button
                            onClick={() =>
                                setValue({
                                    startTimezone:
                                        startTimezone?.value === "AM"
                                            ? "PM"
                                            : "AM",
                                })
                            }
                            variant="ghost"
                            styles={{ color: "pink" }}
                        >
                            {startTimezone?.value}
                        </Button>
                    </Stack>

                    <Text weight={600} color="pink">
                        End Time
                    </Text>

                    <Stack align="center">
                        <Stack direction="vertical">
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform:
                                        "rotate(-135deg) translateX(-3px)",
                                }}
                                onClick={() =>
                                    updateEndTimeHour(endTimeHour.value + 1)
                                }
                            />
                            <Input
                                value={endTimeHour.value}
                                styles={styles.InputStyles}
                                onChange={e =>
                                    setValue({
                                        endTimeHour: Number(e.target.value),
                                    })
                                }
                            />
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform: "rotate(45deg) translateY(-3px)",
                                }}
                                onClick={() =>
                                    updateEndTimeHour(endTimeHour.value - 1)
                                }
                            />
                        </Stack>

                        <Text weight={600}>:</Text>
                        <Stack direction="vertical">
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform:
                                        "rotate(-135deg) translateX(-3px)",
                                }}
                                onClick={() =>
                                    updateEndTimeMinute(
                                        endTimeMinute.value + 30
                                    )
                                }
                            />
                            <Input
                                value={endTimeMinute.value}
                                styles={styles.InputStyles}
                                onChange={e =>
                                    setValue({
                                        endTimeMinute: Number(e.target.value),
                                    })
                                }
                            />
                            <Container
                                styles={{
                                    ...styles.ChevronStyles,
                                    transform: "rotate(45deg) translateY(-3px)",
                                }}
                                onClick={() =>
                                    updateEndTimeMinute(
                                        endTimeMinute.value - 30
                                    )
                                }
                            />
                        </Stack>

                        <Button
                            onClick={() =>
                                setValue({
                                    endTimezone:
                                        endTimezone.value === "AM"
                                            ? "PM"
                                            : "AM",
                                })
                            }
                            variant="ghost"
                            styles={{ color: "pink" }}
                        >
                            {endTimezone.value}
                        </Button>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
};
