const content = [
  {
    title: "Photo",
    img: {
      url: "https://i.imgur.com/OKS67lhm.jpg",
      alt: "Aklilu Lemma",
    },
  },
  {
    title: "About",
    desc: "Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.",
  },
];

function Card({ title, img, desc }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {img?.url ? (
          <img
            className="avatar"
            src={img.url}
            alt={img.alt}
            width={70}
            height={70}
          />
        ) : (
          <p>{desc}</p>
        )}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card {...content[0]} />
      <Card {...content[1]} />
    </div>
  );
}
