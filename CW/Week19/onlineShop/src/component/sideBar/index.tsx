const notificationMethods = [
  { id: 'asc', title: 'Ascending' },
  { id: 'desc', title: 'Descending' }
]

const Sidebar = () => {
  return (
    <div className={"w-[20%] bg-gray-700 m-2 h-[50rem] p-5 text-white"}>
      <h1 className={"text-2xl "}>Filter Products</h1>
      <div className={"text-white"}>
        <fieldset className="mt-4">
          <div className="space-y-4">
            {notificationMethods.map((notificationMethod) => (
              <div key={notificationMethod.id} className="flex items-center">
                <input
                  id={notificationMethod.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={notificationMethod.id === 'email'}
                  className="focus:ring-indigo-500 h-4 w-4 border-gray-300 hover:cursor-pointer"
                />
                <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium hover:cursor-pointer">
                  {notificationMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Sidebar;