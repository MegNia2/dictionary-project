import "./Images.css";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="Images">
        <section className="row">
          {props.images.map(function (images, index) {
            return (
              <div className="col-4" key={index}>
                <img src={images.src.landscape} alt={images.alt} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
