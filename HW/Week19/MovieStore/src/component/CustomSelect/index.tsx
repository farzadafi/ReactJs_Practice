import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CgArrowsExchangeAltV} from "react-icons/all";
import {YellowLabel} from "@/component";

const goner = [
  {id: 0, name: "اکشن"},
  {id: 1, name: "کمدی"},
  {id: 2, name: "درام"}
];

interface Props {
  labelName: string;
  onClick: (e: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomSelect = ({labelName, onClick}: Props) => {
  const [selectedValue, setSelected] = useState(goner[0]);

  return (
    <Listbox value={selectedValue} onChange={setSelected}>
      {({open}) => (
        <>
          <YellowLabel labelName={labelName} classes={"-mb-7"}/>
          <div className="relative">
            <Listbox.Button className="relative w-full border-2 border-gray-500 rounded-md shadow-sm p-3 ">
              <span className="block truncate">{selectedValue.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <CgArrowsExchangeAltV className={"w-8 h-8"}/>
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                        leaveTo="opacity-0">
              <Listbox.Options
                className="absolute z-10 mt-1 w-full bg-gray-600 text-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {goner.map((item) => (
                  <Listbox.Option key={item.id} className={({active}) =>
                    classNames(
                      active ? "text-white bg-yellow-500 hover:cursor-pointer" : "text-white",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
                    )
                  } value={item}>
                    {({selected, active}) => (
                      <>
                        <span onClick={() => onClick ? onClick(selectedValue.name) : null}
                              className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>
                          {item.name}
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