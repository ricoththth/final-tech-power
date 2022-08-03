import React from 'react'
import "../form-home/FormHome.css"
import "../form-home/Script.js"
import NumberInput from "./NumberInput"

function FormHome() {
  return (
    
    <div><form class="formhome">
    <div class="form-home">
    <div class="form-white-section">
        <label>Check in</label>
        <input type="date" placeholder="Add Date"/>
    </div>
    <div class="form-white-section">
        <label>Check Out</label>
        <input type="date" placeholder="Add Date"/>
    </div>

    <div class="form-white-section guest-home">
    

    <label class="label-form-home">Guest</label>
    <NumberInput/>
</div>


    <div class="form-button">
        <input type="submit" class="btn-cont-form" />
    </div>

    

</div>

</form>
</div>
  )
}

export default FormHome