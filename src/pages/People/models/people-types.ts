export interface MapDispatchToProps {
  getPeople: Function;
}

export interface MapStateToProps{
  loading: boolean;
}

export type PeopleAllProps = MapStateToProps & MapDispatchToProps;
