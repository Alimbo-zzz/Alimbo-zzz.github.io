


function focus(){
	const elems = document.querySelectorAll('.form__box');

	elems.forEach((el)=>{
		let inp = el.querySelector('input[type="text"]');

		inp.onfocus = (e)=>{
			let parent = e.target.parentNode;
			parent.classList.add('_focus');
		}

		inp.onblur = (e)=>{
			if(inp.value.length <= 0){				
				let parent = e.target.parentNode;
				parent.classList.remove('_focus');
			}
		}
	})


}

focus();




function validation(){

	const inputs = document.querySelectorAll('input[type="text"]');

	inputs.forEach((el)=>{
		el.onclick = ()=>{
			inputs.forEach((inp)=>{
				inp.parentNode.classList.remove('_error')
			})
		}
	})

  let form = document.querySelector('.form');
  form.addEventListener('submit', formSend);

  function formSend(e){
    e.preventDefault();
    let error = formValidate(form);

    if(error === 0){
      form.querySelectorAll('._req').forEach((item, i) => {
        item.value = '';
        let el_style = item.parentNode;
        el_style.classList.remove('_focus');
        window.location.reload();
      });
    }
  }


  function formValidate(){
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    formReq.forEach((item, i) => {
      RemoveError(item);
      if(item.value.length < 6) {
         AddError(item);
         error++;
       }
    });

    return error;
  }

  function AddError(inp){
      let el_style = inp.parentNode;
      el_style.classList.add('_error');
  }
  function RemoveError(inp){
      let el_style = inp.parentNode;
      el_style.classList.remove('_error');
  }

}

validation();