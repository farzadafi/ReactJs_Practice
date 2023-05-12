import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CgArrowsExchangeAltV} from "react-icons/all";
import {YellowLabel} from "@/component";

const people = [
  {id: 1, name: "اکشن"},
  {id: 2, name: "کمدی"},
  {id: 3, name: "درام"}
];

interface Props {
  labelName: string;
  onClick: (e:React.MouseEvent<HTMLSpanElement>) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomSelect = ({labelName, onClick}: Props) => {
  const [selected, setSelected] = useState(people[0])
  console.log(selected);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <YellowLabel labelName={labelName} classes={"-mb-7"}/>
          <div className="relative">
            <Listbox.Button className="relative w-full border-2 border-gray-500 rounded-md shadow-sm p-3 ">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <CgArrowsExchangeAltV className={"w-8 h-8"}/>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-600 text-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-yellow-500 hover:cursor-pointer' : 'text-white',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
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
// onClick={(e) => onClick ? onClick(e) : null}
// <YellowLabel labelName={labelName} classes={"-mb-7"}/>
// <CgArrowsExchangeAltV className={"w-8 h-8"}/>


// Listbox.option
// className="absolute z-10 mt-1 w-full bg-gray-600 text-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

