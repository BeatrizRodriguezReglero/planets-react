import styled from 'styled-components';

const StyledTabs = styled.button`
	font-family: 'League Spartan';
	border: none;
	padding-bottom: 15px;
	background-color: transparent;
	color: ${({ $isActive }) => ($isActive ? 'white' : '#ffffff7c')};
	border-bottom: ${({ $isActive, $color }) =>
		$isActive ? `4px solid ${$color}` : 'none'};
`;
const TabContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;

export { StyledTabs, TabContainer };
