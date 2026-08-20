export const sidebar = [
  {
    label: "Sản Khoa",
    items: [
      "san-khoa",
      {
        label: "Tổng quan sản khoa",
        items: [
          {
            autogenerate: {
              directory: "san-khoa/tong-quan",
              collapsed: true,
            },
          },
        ],
        collapsed: true,
      },
    ],
  },
  {
    label: "Phụ Khoa",
    items: [
      "phu-khoa",
      {
        label: "Tổng quan phụ khoa",
        items: [
          {
            autogenerate: {
              directory: "phu-khoa/tong-quan",
              collapsed: true,
            },
          },
        ],
        collapsed: true,
      },
    ],
  },
  {
    label: "Hỗ trợ sinh sản",
    items: [
      "ho-tro-sinh-san",
      {
        label: "Tổng quan hỗ trợ sinh sản",
        items: [
          {
            autogenerate: {
              directory: "ho-tro-sinh-san/tong-quan",
              collapsed: true,
            },
          },
        ],
        collapsed: true,
      },
    ],
  },
];
