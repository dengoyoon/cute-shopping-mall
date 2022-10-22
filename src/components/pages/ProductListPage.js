import { Component } from '../../core/Component';

export class ProductListPage extends Component {
	setup() {
		this.state = [];
	}
	mounted() {
		// API 호출
		// 응답 결과로 setState
	}
	updated() {
		// 업데이트된 state, props로 하위 컴포넌트들 마운트
	}
	template() {
		// 해당 template은 <div class="ProductListPage">에 렌더링된다.
	}
	setEvent() {
		// 이벤트리스너 등록 및 이벤트 받기는 하위 컴포넌트에서 할거고, 여기선 setEvent 대신 이벤트 처리 로직 함수 만들어야 함
	}
}
