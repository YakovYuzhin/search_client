import { calcGenderAmount, calcusersAgeGroups } from '../../utils/utils';

export function StatisticTemplate(props: any) {
  return (
    <div className="statistics">
      <div className="usersAmount">{`All users: ${props.users.length}`}</div>
      <div className="usersAgeGroups">{`Old: ${
        calcusersAgeGroups(props.users)["20+"]
      } --- Yung: ${calcusersAgeGroups(props.users)["20-"]}`}</div>
      <div className="usersGenderGroups">{`Woman: ${
        calcGenderAmount(props.users).w
      } --- Man: ${calcGenderAmount(props.users).m}`}</div>
    </div>
  );
}
