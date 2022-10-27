import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner
        img={
          "https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
        }
        heading={"Responsive left-aligned hero with image"}
        paragraph={
          "Quickly design and customize responsive mobile-first sites with Bootstrap the world’s most popular front-end open source toolkit featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        }
        btn_no={2}
        btn1_text={"Primary"}
        btn2_text={"Default"}
        btn1_type={"btn-primary"}
        btn2_type={"btn-outline-secondary"}
        img_right={true}
      />
      <div className="mt-4"></div>
      <Banner
        img={
          "https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
        }
        heading={"Responsive left-aligned hero with image"}
        paragraph={
          "Quickly design and customize responsive mobile-first sites with Bootstrap the world’s most popular front-end open source toolkit featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        }
        btn_no={2}
        btn1_text={"Primary"}
        btn2_text={"Default"}
        btn1_type={"btn-primary"}
        btn2_type={"btn-outline-secondary"}
        img_left={true}
        bg_color={"#cccccc"}
      />
    </>
  );
}

export default App;
