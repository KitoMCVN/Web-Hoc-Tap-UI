export interface Class {
  id: string;
  name: string;
  description: string;
  subjects: { name: string; playlist_id: string }[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  classes: Class[];
}

export const DeOnData: Course[] = [
  {
    id: "math",
    name: "Đề Tuyển Sinh",
    description: "Đề tuyến sinh lớp 10",
    classes: [
      {
        id: "1",
        name: "Toán",
        description: "Toán lớp 10",
        subjects: [
          { name: "Toán Sóc Trăng 2024", playlist_id: "toan-st-2024" },
          { name: "Toán Sóc Trăng 2023", playlist_id: "toan-st-2023" },
        ],
      },
      { id: "2", name: "Văn", description: "Toán lớp 11", subjects: [{ name: "Văn Sóc Trăng 2024", playlist_id: "van-st-2023" }] },
    ],
  },
];
