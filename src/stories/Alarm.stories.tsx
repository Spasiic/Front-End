import { Meta, StoryObj } from '@storybook/react';
import Alarm from '../app/components/Alarm';


const meta: Meta<typeof Alarm> = {
    component: Alarm,
};

export default meta;
type Story = StoryObj<typeof Alarm>;

export const SetAlarm: Story = {
};