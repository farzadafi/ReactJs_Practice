import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CgArrowsExchangeAltV} from "react-icons/all";

const people = [
  {id: 1, name: "اکشن"},
  {id: 2, name: "کمدی"},
  {id: 3, name: "درام"}
];

interface Props {
  labelName : string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomSelect = ({labelName}:Props) => {
  const [selected, setSelected] = useState(people[1]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <>
          <div className={"flex gap-2 items-center -mb-6"}>
            <span className="w-2 h-5 bg-yellow-300 rounded-sm inline-block"></span>
            <label className="block text-sm font-medium text-gray-700 text-white text-xl">
              {labelName}
            </label>
          </div>
          <div className="relative">
            <Listbox.Button
              className="w-full border-2 hover:cursor-pointer border-gray-500 p-4 rounded-md cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm">
              <span className="block">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <CgArrowsExchangeAltV/>
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                        leaveTo="opacity-0">
              <Listbox.Options
                className="absolute z-10 mt-1 w-full bg-gray-600 text-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option key={person.id} className={({active}) =>
                    classNames(
                      active ? "text-black bg-yellow-300" : "text-white",
                      "cursor-default hover:cursor-pointer select-none relative py-2 pl-3 pr-9"
                    )
                  } value={person}>
                    {({selected, active}) => (
                      <>
                        <span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CustomSelect;