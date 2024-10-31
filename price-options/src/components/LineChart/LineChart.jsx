import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const LineChart = () => {

    const studentsMarks = [
        {
          "id": 1,
          "name": "Alice",
          "Math": 85,
          "Physics": 90,
          "Chemistry": 88,
          "Biology": 92
        },
        {
          "id": 2,
          "name": "Bob",
          "Math": 72,
          "Physics": 75,
          "Chemistry": 70,
          "Biology": 68
        },
        {
          "id": 3,
          "name": "Charlie",
          "Math": 90,
          "Physics": 87,
          "Chemistry": 85,
          "Biology": 89
        },
        {
          "id": 4,
          "name": "David",
          "Math": 60,
          "Physics": 67,
          "Chemistry": 63,
          "Biology": 65
        },
        {
          "id": 5,
          "name": "Eva",
          "Math": 95,
          "Physics": 93,
          "Chemistry": 92,
          "Biology": 94
        },
        {
          "id": 6,
          "name": "Frank",
          "Math": 78,
          "Physics": 79,
          "Chemistry": 80,
          "Biology": 82
        },
        {
          "id": 7,
          "name": "Grace",
          "Math": 58,
          "Physics": 80,
          "Chemistry": 100,
          "Biology": 86
        },
        {
          "id": 8,
          "name": "Hannah",
          "Math": 94,
          "Physics": 96,
          "Chemistry": 44,
        }
    ]


    return (
        <div>

            <Lchart width={500} height={400} data={studentsMarks}>

                <Line dataKey="Math" stroke='red'></Line>
                <Line dataKey="Physics" stroke='black'></Line>
                <Line dataKey="Chemistry" stroke='green'></Line>
                <Line dataKey="Biology" stroke='blue'></Line>

                <YAxis dataKey=""/>
                <XAxis dataKey=""/>
            </Lchart>

            <ResponsiveContainer width={600} height={300}>
                <RadarChart data={studentsMarks}>
                    <PolarAngleAxis dataKey="Math" />
                    <PolarGrid></PolarGrid>
                    <PolarRadiusAxis></PolarRadiusAxis>
                    <Radar dataKey="Chemistry"></Radar>
                </RadarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default LineChart;