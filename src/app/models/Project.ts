import {Actortemplate} from "./Actortemplate";
export interface Project{

  $key?: string,
  actortemplates: Array<Actortemplate>,
  analist: string,
  description: string,
  name: string

}
