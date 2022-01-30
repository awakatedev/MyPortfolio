import '../assets/styles/components/Skeleton.scss';
const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}>
      <div className="skeleton-wrapped"></div>
    </div>
  );
};
export default Skeleton;
