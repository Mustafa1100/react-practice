const Banner = (props) => {
  return (
    <div
      class="container col-xxl-8 px-4 py-5"
      style={{ backgroundColor: props.bg_color }}
    >
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        {props.img_right ? (
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={props.img}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        ) : null}
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">{props.heading}</h1>
          <p class="lead">{props.paragraph}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            {props.btn_no === 2 ? (
              <>
                <button
                  type="button"
                  class={"btn " + props.btn1_type + " btn-lg px-4 me-md-2"}
                >
                  {props.btn1_text}
                </button>
                <button
                  type="button"
                  class={"btn " + props.btn2_type + " btn-lg px-4"}
                >
                  {props.btn2_text}
                </button>
              </>
            ) : (
              <button
                type="button"
                class={"btn " + props.btn1_type + " btn-lg px-4 me-md-2"}
              >
                {props.btn1_text}
              </button>
            )}
          </div>
        </div>
        {props.img_left ? (
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={props.img}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
