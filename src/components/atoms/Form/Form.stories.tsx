import React from "react";

import Stack from "components/layouts/Stack/Stack";
import Form from "./Form";
import Card from "components/atoms/Card/Card";
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Radio from "components/atoms/Radio/Radio";
import Button from "components/atoms/Button/Button";
import Checkbox from "components/atoms/Checkbox/Checkbox";
import Select from "components/molecules/Select/Select";
import { useForm } from "hooks/form/useForm";
import { Text } from "components";
import { RULES } from "hooks/form/rules";
import { uuid } from "helpers/utils";

export default {
    title: "Atoms/Form",
    component: Form,
};

export const Default = () => {
    const { form, setValue, errors } = useForm({
        name: {
            default: "",
            rules: [RULES.nonEmptyString],
        },
        email: {
            default: "",
            rules: [RULES.email, RULES.nonEmptyString],
        },
        address: {
            default: "",
        },
        crust: {
            default: null,
        },
        extras: {
            default: [
                {
                    label: "Cheese",
                    id: "cheese",
                },
                {
                    label: "Oregano",
                    id: "oregano",
                },
                {
                    label: "Dips",
                    id: "dips",
                },
            ],
        },
        discount: {
            default: "no",
        },
    });

    const { name, email, discount, address, crust, extras } = form;

    return (
        
            <Card styles={{ width: "500px", margin: "auto" }}>
                <Form onSubmit={event => event?.preventDefault()}>
                    <Stack
                        direction="vertical"
                        gap={4}
                        inline
                        align="flex-start"
                        fullWidth
                    >
                        <Heading>Pizza Order</Heading>
                        <Stack direction="vertical" fullWidth gap={1}>
                            <Heading variant={5}>Your Name *</Heading>
                            <Input {...name} fullWidth placeholder="Name" />
                            {name.errors.map(error => (
                                <Text color="red" variant={2} key={uuid()}>
                                    {error.message}
                                </Text>
                            ))}
                        </Stack>
                        <Stack direction="vertical" fullWidth gap={1}>
                            <Heading variant={5}>Email *</Heading>
                            <Input
                                {...email}
                                fullWidth
                                placeholder="email-id"
                            />
                            {email.errors.map(error => (
                                <Text color="red" variant={2} key={uuid()}>
                                    {error.message}
                                </Text>
                            ))}
                        </Stack>
                        <Stack direction="vertical" fullWidth gap={1}>
                            <Heading variant={5}>Address</Heading>
                            <Input
                                {...address}
                                fullWidth
                                placeholder="Address"
                                value={address.value}
                            />
                            {address.errors.map(error => (
                                <Text color="red" variant={2} key={uuid()}>
                                    {error.message}
                                </Text>
                            ))}
                        </Stack>
                        <Select
                            selected={crust.value}
                            onSelect={({ value }: any) => {
                                setValue({ crust: value });
                            }}
                            label="Choose your pizza crust"
                            values={[
                                {
                                    label: "Hand tossed",
                                    id: "handtossed",
                                },
                                {
                                    label: "Thin Crust",
                                    id: "thincrust",
                                },
                                {
                                    label: "Cheese burst",
                                    id: "cheeseburst",
                                },
                            ]}
                        ></Select>
                        {crust.errors.map(error => (
                            <Text color="red" variant={2} key={uuid()}>
                                {error.message}
                            </Text>
                        ))}
                        <Radio
                            id="yes"
                            label="Yes"
                            checked={discount.value === "yes"}
                            onChange={() => setValue({ discount: "yes" })}
                        />
                        <Radio
                            id="no"
                            label="No"
                            checked={discount.value === "no"}
                            onChange={() => setValue({ discount: "no" })}
                        />
                        <Stack direction="vertical" fullWidth gap={1}>
                            <Heading variant={5}>Extras</Heading>
                            <Stack fullWidth gap={2}>
                                {/* @ts-ignore */}
                                {extras.value.map(
                                    ({
                                        id,
                                        label,
                                        isSelected = false,
                                    }: any) => (
                                        <Checkbox
                                            key={id}
                                            id={id}
                                            onChange={() => {
                                                setValue({
                                                    extras: extras.value.map(
                                                        (item: any) =>
                                                            item.id === id
                                                                ? {
                                                                      ...item,
                                                                      isSelected: !isSelected,
                                                                  }
                                                                : item
                                                    ),
                                                });
                                            }}
                                            label={label}
                                            checked={isSelected}
                                        />
                                    )
                                )}
                            </Stack>
                        </Stack>

                        <Button
                            type="submit"
                            styles={{ marginLeft: "auto !important" }}
                            disabled={errors.length > 0}
                        >
                            Order Now
                        </Button>
                    </Stack>
                </Form>
            </Card>
        
    );
};
