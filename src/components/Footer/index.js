import "./Footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer">
			<span>
				Este site não possui qualquer relação com a
				<a href="https://www.riotgames.com/pt-br" target="__blank">
					Riot Games
				</a>
				. É um site dedicado a montar times do jogo
				<a href="https://www.leagueoflegends.com/pt-br/" target="__blank">
					League of Legends
				</a>
				, sem coletar informações pessoais de qualquer jogador. Alguns direitos reservados
				<a href="https://github.com/ramonvc" target="__blank">
					Ramon
				</a>
				©{currentYear}.
				<a href="https://github.com/ramonvc/organi" target="__blank">
					<img
						className="github-logo"
						src={process.env.PUBLIC_URL + "/icons/social/github-logo.png"}
						alt="github logo"></img>
				</a>
			</span>
		</div>
	);
};

export default Footer;
