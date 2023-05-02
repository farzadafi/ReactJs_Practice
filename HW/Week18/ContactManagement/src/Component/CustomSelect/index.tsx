import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckCircleIcon, SelectorIcon} from "@heroicons/react/solid";

interface Props {
  onClick: (value:string) => void;
}

const people = [
  {id: 1, name: "نسبت"},
  {id: 2, name: "اعضای خانواده"},
  {id: 3, name: "دوست"},
  {id: 4, name: "همکار"},
  {id: 5, name: "فامیل"},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomSelect = ({onClick}:Props) => {
  const [selected, setSelected] = useState(people[0]);


  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <>
          <div className="relative w-full">
            <Listbox.Button
              className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block text-gray-500 truncate pointer-events-none">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                        leaveTo="opacity-0">
              <Listbox.Options
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option key={person.id} onClick={() => onClick ? onClick(person.name) : "null" } className={({active}) =>
                    classNames(
                      active ? "text-white bg-indigo-600" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
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
                            <CheckCircleIcon className="h-5 w-5" aria-hidden="true"/>
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