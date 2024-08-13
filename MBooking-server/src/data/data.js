const movie = [
  {
    title: "Avengers: Cuộc chiến vô cực",
    description: "Sau khi lấy được Viên đá Sức mạnh, một trong sáu Viên đá Vô cực từ hành tinh Xandar, Thanos cùng các con nuôi - Ebony Maw, Cull Obsidian, Proxima Midnight và Corvus Glaive - tấn công tàu Statesman đang chở theo những cư dân tị nạn Asgard, sát hại một nửa số người ở đây. Thanos tra tấn Thor nhằm buộc Loki giao nộp Viên đá Không gian ẩn chứa trong khối Tesseract. Hulk cố gắng ngăn cản nhưng cũng bị Thanos đánh bại chóng vánh. Heimdall trong lúc thoi thóp đã kịp sử dụng sức mạnh của cầu Bifröst để đưa Hulk trở về Trái Đất, rồi ông bị Thanos phát hiện và đâm chết,. Loki giả vờ đầu hàng hòng giết Thanos, để rồi chịu chung kết cục với Heimdall. Thanos sau đó phá hủy con tàu để Thor trôi dạt ngoài vũ trụ.",
    director: ["Anthony Russo", "Joe Russo"],
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Don Cheadle",
      "Sebastian Stan",
      "Clark Gregg",
      "Benedict Cumberbatch",
      "Samuel L. Jackson",
      "Elizabeth Olsen",
      "Anthony Mackie",
      "Lupita Nyong'o",
      "Natalie Portman",
      "Benedict Wong",
      "Vin Diesel",
      "Dwayne Johnson",
      "Djimon Hounsou",
      "Vincent Cassel",
      "Elizabeth Olsen",
      "Daisy Ridley",
    ],
    duration: 180,
    genre: ["Action", "Adventure", "Sci-Fi", "Superhero", "Thriller", "War"],
    releaseDate: "2018-04-25",
    thumbnail: {
      public_id: "Movie/Movies/Thumbnail/hdyryy2rhknxyvke7cyp",
      secure_url:
        "https://res.cloudinary.com/dsukseqnu/image/upload/v1723022284/Movie/Movies/Thumbnail/hdyryy2rhknxyvke7cyp.jpg",
    },
    trailer: {
      public_id: "Movie/Movies/Trailer/urmcvaqdwzus7o50fpus",
      secure_url:
        "https://res.cloudinary.com/dsukseqnu/video/upload/v1723022298/Movie/Movies/Trailer/urmcvaqdwzus7o50fpus.mp4",
    },
    images: [
      {
        public_id: "Movie/Movies/Images/j8hwleezv8ajsju4lz8x",
        secure_url:
          "https://res.cloudinary.com/dsukseqnu/image/upload/v1723022306/Movie/Movies/Images/j8hwleezv8ajsju4lz8x.png",
      },
    ],
    language: ["English", "VietSub"],
    censorship: "PG-13",
  },
  
];

const cinema = [
  {
    cinema_name: "Beta Mỹ Đình",
    cinema_address: "Mỹ Đình, Hà Nội", 
  },

  {
    cinema_name: "Beta Thanh Xuân",
    cinema_address: "Thanh Xuân, Hà Nội",
  },
  {
    cinema_name: "Beta Đan Phượng",
    cinema_address: "Đan Phượng, Hà Nội",
  },
  {
    cinema_name: "Lotte Cinestar Hà Nội",
    cinema_address: "Hà Nội, Hà Nội",
  }
];

const rooms = [
  {
    cinema_id: "66ba19c8917a2b0bcc79fda3",
    room_name: "Room 1",
  },
  {
    cinema_id: "66ba19c8917a2b0bcc79fda3",
    room_name: "Room 2",
  },
  {
    cinema_id: "66ba19c8917a2b0bcc79fda3",
    room_name: "Room 3",
  }
];

const seats = [
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
  {
    room_id: "66ba1aa9a6c4ee5368264d6a",
    seat_type: 0,
    seat_row: "A",
    seat_number: 1,
    seat_status: "available",
  },
];

module.exports = { cinema, rooms,  };
