const Hostel = ()=>{
    return(
        <>
            <div className="flex display-center justify-center mt-[30px]">
                <h1 className="font-bold text-2xl">Hostel</h1>
            </div>
            <div>
                <label>Enter Hostel number</label>
                <input type="text" placeholder="Hostel number :-" />
                <label>Enter Room number: </label>
                <input type="number" placeholder="Room no :-" />
            </div>
        </>
    )
}
export default Hostel