function rating(){
	const modal = document.querySelector('.modal');
	const modal_window = document.querySelector('.modal__window');
	const btn_modal = document.querySelector('.rating');
	const remove_btn_modal = document.querySelector('.icon-x');


	btn_modal.onclick = ()=>{
		modal.classList.add('_active');
	}
	remove_btn_modal.onclick = ()=>{
		modal.classList.remove('_active');
	}

	window.onclick = (e)=>{
		if(e.target == modal){	
			modal.classList.remove('_active');
		}
	}

}
rating();


function animation(){
	const girl = document.querySelector('.girl');
	const btn = document.querySelector('.btn');

	btn.onclick = ()=>{
		girl.style.animation = 'move_girl 10s ease';
		setTimeout(()=>{			
			girl.style.animation = 'none';
		}, 10000)
	}
}
animation();



function rating_addPlayers(){
	const list = document.querySelector('.modal__list');

	let HTML_teg = '';

	data.rating.forEach((el, i)=>{
  	HTML_teg += ` 
			<li class="modal__el">								
				<span>${i+1}</span>
				<span class="name">${el.name} ${el.lastName}</span>
				<span>${el.points}</span>
			</li>
		`;
		list.innerHTML = HTML_teg; 
  })

}

rating_addPlayers();




function splide(){

const slider =	new Splide( '.splide' ,{
		perPage: 6,
		perMove: 1,
		pagination: false,
} ).mount();

window.addEventListener("load", function(event) {
	let btns = document.querySelectorAll('.splide__arrow');

	btns.forEach(el => el.classList.add('icon-arrow'))


});

	data.friends.forEach((el)=>{
		slider.add( `<li class="splide__slide">
			<a href="" class="slider__box icon-user"></a>
		</li>` );
	})

	// ____________________

	let btn_next = document.querySelector('.btn_next');
	let btn_prev = document.querySelector('.btn_prev');


	let elems = document.querySelectorAll('.splide__slide');
	let idx = 0;

	btn_prev.onclick= ()=>{
		remove_class();
		if(idx > 0)	idx--;

		elems.forEach((el, index)=>{
			if(index == idx){
				el.classList.add('_active')
			}
		})
	}

	elems[0].classList.add('_active')

	btn_next.onclick= ()=>{		
		remove_class();
		if(idx < elems.length -1)	idx++;
		elems.forEach((el, index)=>{
			if(index == idx){
				el.classList.add('_active')
			}
		})
	}


	function remove_class(){
		elems.forEach((item)=>{
			item.classList.remove('_active');
		})
	}


}

splide();




function modal_friends(){

	let friends = data.friends;
	let rating = data.rating;

	let mas =[];
	let rating_mas = document.querySelectorAll('.modal__el')

	friends.forEach((friend)=>{
		rating.forEach((el)=>{
			if(friend.id == el.id){
				mas.push(el);
			}
		})
	})


	mas.forEach((friend)=>{
		rating_mas.forEach((el)=>{
			let friend_name = `${friend.name} ${friend.lastName}`;
			let name = el.querySelector('.name').textContent;

			if(friend_name == name){
				el.style.background = 'gold';
			}

		})
	})


}

modal_friends();


