interface Props {
  labelName : string,
  classes? : string
}

const YellowLabel = ({labelName, classes}:Props) => {
  return (
    <>
      <div className={`flex gap-2 items-center ${classes}`}>
        <span className="w-2 h-5 bg-yellow-300 rounded-sm inline-block"></span>
        <label className="block text-sm font-medium text-gray-700 text-white text-xl">
          {labelName}
        </label>
      </div>
    </>
  );
};

export default YellowLabel;