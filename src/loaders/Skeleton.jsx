import '../assets/styles/components/Skeleton.scss';
const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};
export default Skeleton;
