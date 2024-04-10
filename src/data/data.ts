export interface Subject {
  name: string;
  playlist_id: string;
}

export interface Class {
  id: number;
  name: string;
  description: string;
  subjects: Subject[];
}

export interface Course {
  id: number;
  name: string;
  description: string;
  classes: Class[];
  number_class: number;
}

export const HomeData: Course[] = [
  {
    id: 1,
    name: "Cánh Diều",
    description: "Bộ sách Cánh Diều là một trong những bộ sách giáo khoa phổ biến ở Việt Nam, được thiết kế cho các lớp từ 6 đến 11.",
    classes: [
      {
        id: 1,
        name: "Lớp 6",
        description: "Cánh Diều Lớp 6",
        subjects: [
          {
            name: "Toán Đại Số",
            playlist_id: "PLCd8j6ZYo0lbZqAdLOSkjXgKGGz_2Taf5",
          },
          {
            name: "Toán Hình Học",
            playlist_id: "PLCd8j6ZYo0lYJ5jqIhAZV5NWqftQF41Ag",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lY_ekttn3YMu8h8ktOvLfgO",
          },
          {
            name: "Ngữ Văn",
            playlist_id: "",
          }
        ],
      },
      {
        id: 2,
        name: "Lớp 7",
        description: "Cánh Diều Lớp 7",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lae6v6H3Z0HpCRave-IDmMi",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0laebFZHOV_LP1pmu_sEbKtZ",
          },
          {
            name: "Ngữ Văn",
            playlist_id: "",
          }
        ],
      },
      {
        id: 3,
        name: "Lớp 8",
        description: "Cánh Diều Lớp 8",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lZTVJ_6GWxKiSU-eywgoHjY",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lbAy9vctkaBWMQWImSddk05",
          },
        ],
      },
      {
        id: 4,
        name: "Lớp 10",
        description: "Cánh Diều Lớp 10",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0laruhgRmxC8zrfd5PY6Ne4u",
          },
          {
            name: "Sinh",
            playlist_id: "PLCd8j6ZYo0lYeTHkWftmClY10EvSycPrj",
          },
        ],
      },
      {
        id: 5,
        name: "Lớp 11",
        description: "Cánh Diều Lớp 11",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lZQORsvi6INVSqDdNNNQRST",
          },
        ],
      },
    ],
    number_class: 5,
  },
  {
    id: 2,
    name: "Chân Trời Sáng Tạo",
    description: "Bộ sách Chân Trời Sáng Tạo mang đến một cách tiếp cận sáng tạo và phản ánh nhu cầu của học sinh trong việc học tập.",
    classes: [
      {
        id: 1,
        name: "Lớp 6",
        description: "Chân Trời Sáng Tạo Lớp 6",
        subjects: [
          {
            name: "Toán Đại Số",
            playlist_id: "PLCd8j6ZYo0la73mUTNbNjCx2Unpkgfuyw",
          },
          {
            name: "Toán Hình Học",
            playlist_id: "PLCd8j6ZYo0lYMgPCt1auMhVmK7EL7SdAF",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lbiy_wsmhPQDhKq1E5SdheY",
          },
        ],
      },
      {
        id: 2,
        name: "Lớp 7",
        description: "Chân Trời Sáng Tạo Lớp 7",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lY2vB8_kxXBQ2rj0_6b0RVD",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lb0rKdkuJv4pB8Bf6CcYGq_",
          },
        ],
      },
      {
        id: 3,
        name: "Lớp 8",
        description: "Chân Trời Sáng Tạo Lớp 8",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0laWogGY2fbYk3HPwfr2l42b",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lYPl46qJ7t6VNaYK-UgwjdU",
          },
        ],
      },
      {
        id: 4,
        name: "Lớp 10",
        description: "Chân Trời Sáng Tạo Lớp 10",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lZ9ASyPwNuWJ3VqmLavAiR7",
          },
        ],
      },
      {
        id: 5,
        name: "Lớp 11",
        description: "Chân Trời Sáng Tạo Lớp 11",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0laYOPASTepBqmTv1YCleMpG",
          },
        ],
      },
    ],
    number_class: 5,
  },
  {
    id: 3,
    name: "Kết nối tri thức",
    description: "Bộ sách Kết nối tri thức nhấn mạnh sự liên kết giữa kiến thức học thuật và cuộc sống hàng ngày của học sinh.",
    classes: [
      {
        id: 1,
        name: "Lớp 6",
        description: "Kết nối tri thức Lớp 6",
        subjects: [
          {
            name: "Toán Đại Số",
            playlist_id: "PLCd8j6ZYo0lbyefvfLKgpoGU9DnSOsvpz",
          },
          {
            name: "Toán Hình Học",
            playlist_id: "PLCd8j6ZYo0lYiD5zvp-EB79ynXC4Y_5HO",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lb-_Y2IV2sesEtinzqsFEeE",
          },
        ],
      },
      {
        id: 2,
        name: "Lớp 7",
        description: "Kết nối tri thức Lớp 7",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lbFhIEuEF8yU4IKQJUK9OaY",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lYZOWhUU9uq5RdrMK3kW-OA",
          },
        ],
      },
      {
        id: 3,
        name: "Lớp 8",
        description: "Kết nối tri thức Lớp 8",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lbaRFxN-5eMDXKAxbG5Bgqh",
          },
          {
            name: "Khoa học tự nhiên",
            playlist_id: "PLCd8j6ZYo0lYPl46qJ7t6VNaYK-UgwjdU",
          },
        ],
      },
      {
        id: 4,
        name: "Lớp 10",
        description: "Kết nối tri thức Lớp 10",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lYG_l7ZNJQEcEyhwtna1Kgf",
          },
          {
            name: "Sinh",
            playlist_id: "PLCd8j6ZYo0lYcyBF5XmBkucDdH8xa1WVR",
          },
        ],
      },
      {
        id: 5,
        name: "Lớp 11",
        description: "Kết nối tri thức Lớp 11",
        subjects: [
          {
            name: "Toán",
            playlist_id: "PLCd8j6ZYo0lbaqU2G1uj7ncJJPq5huN3K",
          },
        ],
      },
    ],
    number_class: 5,
  },
  {
    id: 4,
    name: "Chương Trình Cũ (2006)",
    description: "Bộ sách Chương Trình Cũ (2006) áp dụng cho các lớp 9 và 12 theo chương trình giáo dục cũ.",
    classes: [
      {
        id: 1,
        name: "Lớp 9",
        description: "Chương Trình Cũ (2006) Lớp 9",
        subjects: [
          {
            name: "Toán Đại Số",
            playlist_id: "PLCd8j6ZYo0lY8ZFrhrAyzCzuo5x9YIrAm",
          },
          {
            name: "Toán Hình Học",
            playlist_id: "PLCd8j6ZYo0lY0i-wtos1VSPMF4FSuiZ4l",
          },
          {
            name: "Lý",
            playlist_id: "PLCd8j6ZYo0laeQNpUmEtXSJeS08KzBMu5",
          },
          {
            name: "Hoá",
            playlist_id: "PLCd8j6ZYo0lZCN2kNj8hER6G7qYKk9Jmz",
          },
        ],
      },
      {
        id: 2,
        name: "Lớp 12",
        description: "Chương Trình Cũ (2006) Lớp 12",
        subjects: [
          {
            name: "Toán Đại Số",
            playlist_id: "PLCd8j6ZYo0lbkyF0qIfAJ2vXgnpwj22Ns",
          },
          {
            name: "Toán Hình Học",
            playlist_id: "PLCd8j6ZYo0lYq4BcqmYsMp8dY42Uo65ML",
          },
          {
            name: "Sinh",
            playlist_id: "PLCd8j6ZYo0la94H-A372wDs2xXeDhgu5g",
          },
          {
            name: "Hoá",
            playlist_id: "PLCd8j6ZYo0lZK1gsKE2nz0A9CH_h7PXbE",
          },
        ],
      },
    ],
    number_class: 2,
  },
];