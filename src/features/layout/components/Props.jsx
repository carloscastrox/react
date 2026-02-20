function getImageUrl(person) {
  return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
  return (
    <div className="text-center">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        className="rounded-circle shadow"
      />
      <h5 className="mt-3">{person.name}</h5>
    </div>
  );
}

export default function Props() {
  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="text-center fw-bold pb-5">Props React</h1>
        <p className="lead">
          Este componente demuestra el uso de <strong>props</strong> en React.
          Cada Avatar recibe datos desde el componente padre,
          permitiendo reutilizar el mismo componente con diferente información.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <Avatar
            size={140}
            person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
          />
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <Avatar
            size={120}
            person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
          />
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <Avatar
            size={100}
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
          />
        </div>
      </div>
    </div>
  );
}