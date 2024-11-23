import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f3f3f3;
  position: relative;
`;

const Navbar = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #007BFF;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  text-decoration: none; /* Убирает подчеркивание */
  color: white; /* Белый цвет текста */

  &:hover {
    background-color: #1e5a2b;
  }
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #007bff;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center; 
  padding: 20px;
  overflow-y: auto;
`;

const MatchList = styled.div`
  width: 600px;
  margin-left: 100px;
`;

const Card = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const Score = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #0760f0;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #022c70;
  }
`;

const LeagueListWrapper = styled.div`
  margin-top: 50px;
`;

const LogoPlaceholder = styled.div`
  width: 450px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #666;
  margin-left: 90px;
  margin-bottom: 20px; 
`;

function ChampionsLeague() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const matches = [
    { team1: 'Team A', team2: 'Team B', score: '2 - 1' },
    { team1: 'Team C', team2: 'Team D', score: '1 - 1' },
    { team1: 'Team E', team2: 'Team F', score: '3 - 0' },
    { team1: 'Team G', team2: 'Team H', score: '0 - 2' },
    { team1: 'Team I', team2: 'Team J', score: '4 - 3' },
    { team1: 'Team K', team2: 'Team L', score: '2 - 2' },
    { team1: 'Team M', team2: 'Team N', score: '1 - 0' },
    { team1: 'Team O', team2: 'Team P', score: '0 - 0' },
    { team1: 'Team Q', team2: 'Team R', score: '5 - 4' },
    { team1: 'Team S', team2: 'Team T', score: '3 - 3' },
  ];

  return (
    <Container>
      <ToggleButton onClick={() => setIsNavbarOpen((prev) => !prev)}>
        {isNavbarOpen ? 'Close' : 'Menu'}
      </ToggleButton>

      <Navbar isOpen={isNavbarOpen}>
        <LeagueListWrapper>
          <NavItem to="/main">
            <IconPlaceholder><img src="./public/img/Logo.png" alt="Main Page" /></IconPlaceholder>
            Main Page
          </NavItem>
          <NavItem to="/europaleague">
            <IconPlaceholder><img src="./public/img/Europa-League.png" alt="EuropaLeague League" /></IconPlaceholder>
            Europa League
          </NavItem>
          <NavItem to="/premierleague">
            <IconPlaceholder><img src="./public/img/Premier_League.png" alt="Premier League" /></IconPlaceholder>
            Premier League
          </NavItem>
          <NavItem to="/seriea">
            <IconPlaceholder><img src="./public/img/Serie_A.png" alt="Serie A" /></IconPlaceholder>
            Serie A
          </NavItem>
          <NavItem to="/seriea">
            <IconPlaceholder><img src="./public/img/Bundesliga.png" alt="Bundesliga" /></IconPlaceholder>
            Bundesliga
          </NavItem>
          <NavItem to="/laliga">
            <IconPlaceholder><img src="./public/img/LaLiga.png" alt="LaLiga" /></IconPlaceholder>
            LaLiga
          </NavItem>
        </LeagueListWrapper>
      </Navbar>

      <ContentArea>
        <LogoPlaceholder>
          <img src="./UEFA_Champions_League.png" alt="Logo" width="350" height="174" />
        </LogoPlaceholder>
        <MatchList>
          {matches.map((match, index) => (
            <Card key={index}>
              <TeamName>{match.team1}</TeamName>
              <Score>{match.score}</Score>
              <TeamName>{match.team2}</TeamName>
            </Card>
          ))}
        </MatchList>
      </ContentArea>
    </Container>
  );
}

export default ChampionsLeague;
