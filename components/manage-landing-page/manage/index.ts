export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress towards company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];
