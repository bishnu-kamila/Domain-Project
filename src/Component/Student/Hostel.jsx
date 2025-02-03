const Hostel = ()=>{
    return(
        <>
            <div className="flex display-center justify-center mt-[30px]">
                <h1 className="font-bold text-2xl">Hostel</h1>
            </div>
            <div className="flex display-center justify-center mt-[30px]">
                <div>
                    <div>
                        <label>Enter Hostel number</label>
                        <input type="text" placeholder="Hostel number :-" />
                    </div>
                    <div>
                        <label>Enter Room number: </label>
                        <input type="number" placeholder="Room no :-" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hostel