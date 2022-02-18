function Filter(params) {
  const buttons = ['All', 'Comedy', 'Action'];

  return (
    <div className='filter-container'>
      {buttons.map((button) => (
        <button>{button}</button>
      ))}
    </div>
  );
}
export {Filter}