import styled from 'styled-components';

const StyledImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 95px;
	margin-bottom: 98px;
	padding: 0px;
`;
const StyledImage = styled.img`
	width: ${({ $width }) => $width};
`;
const StyledImageSurface = styled.img`
	width: 62px;
	position: absolute;
	top: ${({ $position }) => $position};
`;

const StyledWikiContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	margin-bottom: 28px;
`;

const StyledImageWiki = styled.img`
	width: 12px;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 24px;
	padding-bottom: 47px;
`;

const StyledPlanetContainer = styled.div`
	text-align: center;
`;
const StyledPlanet = styled.h1`
	font-size: 40px;
`;
const StyledInfo = styled.p`
	font-weight: 300;
	font-size: 11px;
	line-height: 22px;
`;

const StyledLink = styled.p`
	color: #ffffff7a;
`;

const StyledExtraContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	width: 100%;
	padding: 9px 24px 13px 24px;
	border: 1px #ffffff7a solid;
`;
const StyledExtraTitle = styled.p`
	font-size: 8px;
	text-transform: uppercase;
	color: #ffffff7a;
	letter-spacing: 0.73px;
	line-height: 16px;
`;
const StyledExtraInfo = styled.span`
	font-size: 20px;
`;
export {
	StyledImgContainer,
	StyledImage,
	StyledImageSurface,
	StyledWikiContainer,
	StyledImageWiki,
	StyledInfoContainer,
	StyledPlanetContainer,
	StyledPlanet,
	StyledInfo,
	StyledLink,
	StyledExtraContainer,
	StyledExtraTitle,
	StyledExtraInfo
};
