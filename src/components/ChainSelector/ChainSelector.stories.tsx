import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChainSelector from './ChainSelector';

export default {
    title: 'Web3/ChainSelector',
    component: ChainSelector,
} as ComponentMeta<typeof ChainSelector>;

const Template: ComponentStory<typeof ChainSelector> = (args) => (
    <ChainSelector {...args} />
);

export const One = Template.bind({});
// One.args = {
//     routes: [
//         {
//             breadcrumb: 'Moralis Demo App 1',
//             path: '#',
//             icon: <Icon svg={iconTypes.server} size={20} fill="currentColor" />,
//         },
//     ],
//     currentLocation: '#',
// };