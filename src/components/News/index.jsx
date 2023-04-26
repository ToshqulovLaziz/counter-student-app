import React from "react";
import Card from "../News-card";
import rasm from '../../assets/images/rasm.jpg'
import rasm1 from '../../assets/images/rasm1.jpg'
import rasm2 from '../../assets/images/rasm2.jpg'
import rasm3 from '../../assets/images/rasm3.jpg'
import rasm4 from '../../assets/images/rasm4.jpg'
import rasm5 from '../../assets/images/rasm5.jpg'
import rasm6 from '../../assets/images/rasm6.jpg'
import rasm7 from '../../assets/images/rasm7.jpg'
import vector from '../../assets/images/vector.svg'
const News = () => {

    return (
      <>
        <div className="container">
          <div className="col-12 my-5">
            <div className="d-flex flex-wrap justify-content-between aligin-item-center">
              <Card
                img={rasm}
                title="Markazimiz hodimining katta yutug’i"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm1}
                title="Technocorp hisobot tayyorlovchi vositani ishlab chiqmoqda"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm2}
                title="Markaz xodimlari Alisher Navoiy tavalludining 580 yilligiga bag‘ishlangan tadbirda ishtirok..."
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm3}
                title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm4}
                title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm5}
                title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm6}
                title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
              <Card
                img={rasm7}
                title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
                date="23 fevral 2021 yil"
                btn="Batafsil"
                icon={vector}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default News;