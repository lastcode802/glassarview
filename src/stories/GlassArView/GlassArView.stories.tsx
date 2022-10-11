import { Story, Meta } from '@storybook/react';
import React from 'react';
import GlassArView, {GlassArViewProps} from '../../components/GlassArView';

export default {
	title: '3DmodelExample/ThreedView',
	component: GlassArView,
} as Meta;

const Template: Story<GlassArViewProps> = (args: GlassArViewProps) => (
    <div style={{textAlign:'center'}}>
		<GlassArView {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
modelname: 'rayban_aviator_or_vertFlash'
};