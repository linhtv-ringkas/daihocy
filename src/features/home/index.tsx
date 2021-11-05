import React from "react";
import { Link } from "react-router-dom";
import male from 'assets/images/male.png';
import female from 'assets/images/female.png';
import pregnant from 'assets/images/pregnant.png';
import children from 'assets/images/children.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconSmall: {
    width: '0.875rem',
    height: '0.875rem'
  },
});
const listFn = [
  {
    label: "Thông tin \n bệnh nhân nam",
    image: male,
    link: '/male'
  }, {
    label: "Thông tin \n bệnh nhân nữ",
    link: '/female',
    image: female,
  }, {
    label: "Thông tin \n Thai phụ",
    link: '/pregnant',
    image: pregnant,
  }, {
    label: "Thông tin \n bệnh nhân trẻ em",
    link: '/children',
    image: children,
  },
]

const Home: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className="text-[2rem] md:text-[2.5rem] mt-32 md:mt-28 lg:mt-36x font-black text-white">Thông tin <br/> bệnh nhân</h1>
      <div className="mt-6 bg-white h-full rounded-t-2xl px-6 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {listFn.map(i => (
            <Link to={i.link} key={i.label}>
              <div className="flex flex-col">
                <img className="h-auto w-full" src={i.image} alt={i.label}/>
                <span className="text-sm md:text-base font-semibold my-2 whitespace-pre-line">{i.label}</span>
                <span className="text-xs font-semibold text-primary-5">Chỉnh sửa <ArrowForwardIosIcon classes={{root: classes.iconSmall}} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;