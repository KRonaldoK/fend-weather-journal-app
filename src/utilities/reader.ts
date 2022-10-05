import {Request, Response, NextFunction} from 'express';
import {projectData} from "../data/projectData";

const getWeatherJournalData = (req: Request, res: Response, next: NextFunction) => {
  res.send(projectData);
}

export default{
  getWeatherJournalData: getWeatherJournalData
}
