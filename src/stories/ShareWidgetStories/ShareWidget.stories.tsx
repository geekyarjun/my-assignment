import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ShareWidget from "../../Components/ShareWidget/ShareWidget";
import { fakeOptions } from "../../Components/ShareWidget/config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Widgets/ShareWidget",
  component: ShareWidget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: "label",
      description: "Button text",
      control: "text",
      defaultValue: "Share",
      type: { name: "string", required: false },
    },
    children: {
      name: "children",
      description:
        "React children for button. If you are not giving title prop you can supply a children prop and replace the existing child of button.",
      type: { name: "function", required: false },
    },
    inviteesOptions: {
      name: "inviteesOptions",
      description:
        "Invitee's list of options. It will be available for selecting invitees. Default are fake options",
      control: "object",
      defaultValue: fakeOptions,
    },
  },
} as ComponentMeta<typeof ShareWidget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShareWidget> = (args) => (
  <ShareWidget {...args} />
);

export const WithoutExternalProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutExternalProps.args = {};
