import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 24px;
	font-family: 'Antonio', sans-serif;
`;

const StyledMenu = styled.nav`
	position: absolute;
	opacity: ${({ $visibleNav }) => ($visibleNav ? 1 : 0)};
	transition: opacity 0.3s ease;
	pointer-events: ${({ $visibleNav }) => ($visibleNav ? 'auto' : 'none')};
	width: 100%;
	color: white;
	background-color: #070724;
	height: 100%;
	margin-top: 10px;

	z-index: 2;
	ul {
		list-style: none;
		padding: 0;
	}
`;

const StyledLi = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin-left: 24px;
	margin-right: 24px;
	font-size: 15px;
	font-weight: bold;
	border-bottom: 1px #97979753 solid;

	&::before {
		content: '';
		width: 20px;
		height: 20px;
		background-color: ${({ $color }) => $color};
		border-radius: 50%;
	}

	a {
		text-decoration: none;
		color: inherit;
		text-align: left;
		padding: 10px;
		width: 300px;
	}

	img {
		width: 4px;
		height: 8px;
	}
`;
export { StyledHeader, StyledMenu, StyledLi };
