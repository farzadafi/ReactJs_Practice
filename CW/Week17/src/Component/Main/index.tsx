import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";

function Main() {
    return (<main className={""}>
            <Section1/>
            <div className={"flex items-center gap-3 mt-8"}>
                <div className={"flex-1 h-[2px] bg-slate-300"}>
                </div>
                <p>وبلاگ های بروز شده</p>
                <div className={"flex-1 h-[2px] bg-slate-300"}>
                </div>
            </div>
            <Section2/>
        </main>
    )
}

export default Main
