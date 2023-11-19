const getData = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
      id: 2,
      title: "React",
      body: "React adalah sebuah library JavaScript untuk membangun antarmuka pengguna. React dikembangkan oleh Facebook dan banyak digunakan untuk membangun aplikasi web single-page.",
      archived: false,
      createdAt: '2022-05-20T08:15:45.123Z'
    },
    {
      id: 3,
      title: "Node.js",
      body: "Node.js adalah runtime JavaScript yang dibangun di atas mesin JavaScript V8 dari Chrome. Node.js memungkinkan Anda menjalankan JavaScript di sisi server dan digunakan secara luas untuk pengembangan aplikasi web.",
      archived: false,
      createdAt: '2022-06-10T12:42:18.890Z'
    },
    {
      id: 4,
      title: "Express.js",
      body: "Express.js adalah framework web untuk Node.js yang dirancang untuk membangun aplikasi web dan API dengan mudah. Express.js menyediakan berbagai fitur untuk pengembangan web yang efisien.",
      archived: false,
      createdAt: '2022-07-25T16:55:30.721Z'
    },
    {
      id: 5,
      title: "MongoDB",
      body: "MongoDB adalah database NoSQL yang menyimpan data dalam format BSON (Binary JSON). MongoDB sering digunakan untuk menyimpan data JSON yang kompleks dan berukuran besar.",
      archived: false,
      createdAt: '2022-08-18T20:03:12.456Z'
    }
  ]
}

export { getData }