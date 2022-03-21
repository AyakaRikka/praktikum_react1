import React from "react";

export default class BMI extends React.Component{
    constructor(){
        super()
        this.state ={
            bb: 0,
            tb: 0.0,
            hasil: 0,
            status: ""
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlah = (e) =>{
        e.preventDefault()
        let bb = this.state.bb
        let tb = this.state.tb
        let tambah = Number(bb) / Number(tb)**2
        let status = this.state.status
        this.setState({
            hasil: tambah
        })
        if (tambah < 18.5) {
                status = "Underweight"
            } else if (tambah >= 18.5 && tambah <= 24.9) {
                status = "Normal weight"
            } else if (tambah >= 25.0 && tambah <= 29.9) {
                status = "Overweight"
            } else if (tambah >= 30) {
                status = "Obesity"
            }
    }
    render(){
        return(
            <div className="container">
                <h3 className="text-center">From Ubah State</h3>
                <form onSubmit={this.hasilJumlah}>
                    <table class="table table-hover tabel-striped"> 
                    <thead><br></br>
                        <tr>
                            <td>Berat Badan</td>
                            <td><input name="bb" className="form-control" onChange={this.changeState}/></td>
                        </tr>
                        <tr>
                            <p>Tinggi Badan</p>
                            <td><input name="tb" className="form-control" onChange={this.changeState}/></td>
                        </tr>
                        
                        <button type="submit">Hasil</button>
                    </thead>
                    </table>
                </form>
                <h3>Isi State</h3>
                <p>Weight: {this.state.bb}</p>
                <p>Height: {this.state.tb}</p>
                <p>Hasil: {this.state.hasil}</p>
                <p>Status: {this.state.status}</p>
            </div>
        )
    }
}