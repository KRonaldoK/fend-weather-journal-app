import {Request, Response, NextFunction} from 'express';
import {projectData} from "../data/projectData";

const updateWeatherJournalData = (req: Request, res: Response, next: NextFunction) => {
  //console.log(req.body)
  projectData.date = req.body.date
  projectData.temperature = req.body.temp
  projectData.content = req.body.content
  res.send(projectData)
}

export default{
  updateWeatherJournalData: updateWeatherJournalData
}
