const fetchEventData = () => {

  return new Promise((resolve) => {
    const eventData = [
      {
        title: "Beethoven's Masterpieces",
        type: "Orchestral Performance",
        dates: [

          "2023-06-27T19:00:00Z"
        ],
        description: "Experience the timeless brilliance of Beethoven's masterpieces as performed by world-renowned orchestras. ",
        coverImage: "https://encoremusicians.com/blog/wp-content/uploads/2018/04/manuel-nageli-571549-unsplash.jpg",
      },
      {
        title: "Mozart: Symphony No. 40",
        type: "Classical Performance",
        dates: [
          "2023-06-23T23:00:00Z",
          "2023-07-23T23:00:00Z"
        ],
        description: "Indulge in the timeless elegance of Mozart's Symphony No. 40.",
        coverImage: "https://encoremusicians.com/blog/wp-content/uploads/2018/04/manuel-nageli-571549-unsplash.jpg",
      },
      {
        title: "Tchaikovsky's Symphony No. 6",
        type: "Orchestral Showcase",
        dates: [

          "2023-07-19T20:00:00Z"
        ],
        description: "Dive into the emotional depth of Tchaikovsky's Symphony No. 6.",
        coverImage: "https://encoremusicians.com/blog/wp-content/uploads/2018/04/manuel-nageli-571549-unsplash.jpg",
      },
      {
        title: "Bach: Brandenburg Concertos",
        type: "Baroque Showcase",
        dates: [

          "2023-08-06T19:00:00Z"
        ],
        description: "Discover the timeless beauty of Bach's Brandenburg Concertos. Experience the intricate interplay of musical motifs and harmonies.",
        coverImage: "https://encoremusicians.com/blog/wp-content/uploads/2018/04/manuel-nageli-571549-unsplash.jpg",
      },
      {
        title: "Vivaldi: The Four Seasons",
        type: "Chamber Music Experience",
        dates: [

          "2023-08-19T18:30:00Z"
        ],
        description: "Embark on a sensory journey through Vivaldi's masterpiece, The Four Seasons.",
        coverImage: "https://encoremusicians.com/blog/wp-content/uploads/2018/04/manuel-nageli-571549-unsplash.jpg",
      }
    ];


    setTimeout(() => {
      resolve(eventData);
    }, 1000);
  });
};

export default fetchEventData;
