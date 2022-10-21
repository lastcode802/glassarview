import { Story, Meta } from '@storybook/react';
import React from 'react';
import GlassArView, {GlassArViewProps} from '../../components/GlassArView';

export default {
	title: 'ARmodelExample/GlassArView',
	component: GlassArView,
} as Meta;

const Template: Story<GlassArViewProps> = (args: GlassArViewProps) => (
    <div style={{textAlign:'center'}}>
		<GlassArView {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
modelname: 'rayban_aviator_or_vertFlash',
canvaswidth: 500,
canvasheight: 500,
buttonFontColor: 'white',
buttonBackgroundColor: 'yellow'
};
export const buttonColor = Template.bind({});
buttonColor.args = {
modelname: 'rayban_aviator_or_vertFlash',
canvaswidth: 500,
canvasheight: 500,
buttonFontColor: 'white',
buttonBackgroundColor: '#acddde'
};