import React from 'react';
import { Button, Icon, Pane, Dialog, TextInput, toaster, Spinner, Heading, FilePicker, Switch, IconButton } from 'evergreen-ui';
import { Collapse } from 'react-bootstrap';
import Component from "@reactions/component";
import StarRatings from 'react-star-ratings';
import FooterAllPage from '../common/footerAllPage';
// import Vimeo from '@u-wave/react-vimeo';
import Context from '../Context';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import NavbarAllPage from '../common/navbarAllPage'
import host from '../Host';
import Iframe from 'react-iframe'

const cookies = new Cookies();

class AddLecture extends React.Component {
    constructor(props) {
        super(props);
        this.displayDataAdt = [];
        this.state = {
            course: [],
            lectures: [],
            Adtdata: this.displayDataAdt,
            videos: [],
            videos2: [],
            open: false,
            addLecture: '',
            courseId: '',
            nameVideo: '',
            chapter: '',
            free: "false",
            video: [],
            chapterId: '',
            editVideo: '',
            rating: 3.5,
            courseDetels: [],
            nameFile: '',
            Uploadfile: [],
            getFile:[]

        };
    }
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    componentDidMount() {
        axios.get(host + `api/course/Course/` + this.props.match.params.id, { headers: {} })
            .then(response => {
                this.setState({ lectures: response.data })
                this.Html(response.data.length)
            })
            .catch((error) => { console.log('error ' + error); })

        axios.get(host + `api/course/CourseDetails/` + this.props.match.params.id, { headers: { token: cookies.get('token') } })
            .then(response => {
                this.setState({ courseDetels: response.data[0] })
            })
            .catch((error) => { console.log('error ' + error); })
    }
    deleteLecture(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deletechapter/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });

    }

    addLecture() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        formData.append("courseId", this.state.courseId);
        formData.append("title", this.state.addLecture);
        axios({ url: host + "api/course/addchapter", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
    }

    network(id) {
        axios.get(host + `api/course/Chapters/` + id,
            { headers: { token: cookies.get('token') } })
            .then(response => {
                let data = {
                    [id]: response.data
                }

                let videos = [...this.state.videos2, data]







                this.setState({
                    videos: response.data,
                    videos2: videos
                })
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    }

    DeleteVideo(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deleteVideo/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    // this.componentDidMount();

                }
            })
            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });

    }
    DeleteFile(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deleteFile/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    // this.componentDidMount();

                }
            })
            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });

    }
    chengeCheked = () => {
        if (this.state.free === "false") {
            this.setState({ free: 'true' })
        }
        else {
            this.setState({ free: 'false' })
        }
    }
    renderIcon = (_id, stat) => {
        if (stat) { return <Icon id='menuicon' icon="minus" color="danger" size={30} /> }
        else { return <Icon id='menuicon' icon="menu" color="info" size={30} /> }
    }
    uploadFile() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("name", this.state.nameFile);
        formData.append("chapter", this.state.chapterId);
        formData.append("file", this.state.Uploadfile[0]);

        axios({ url: host + "api/course/addFile", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) {
                if (error.request.response) {
                    toaster.danger(error.request.response);
                }
            });
    }
    customFormRenderer(onSubmit) {
        return (
            <form id="customForm" method="post" action={host + `api/course/Videoadd`}>
                <input type="hidden" name="token" value={cookies.get("token")} />
                <input type="hidden" name="chapter" value={this.state.chapterId} />
                <input type="hidden" name="free" value={this.state.free} />

                <div id='inputofuploadVideo'>
                    <div id='labelOfInputuploadVideo'>
                        <p>Name of Video</p>
                    </div>

                    <TextInput width='75%'
                        name="name"
                        placeholder="input name of video..."

                        onChange={(event) =>
                            this.setState({ addLecture: event.target.value })} />
                </div>

                <Heading size={400} marginLeft={32} width="90%" marginBottom={10} marginTop="default">
                    Choose File
            </Heading>

                <FilePicker marginLeft={32} width="90%" marginBottom={10} id="FilePicker"
                    onChange={files => console.log(files)}
                    display="none;" name="file" />
                <Heading size={400} marginLeft={32} marginBottom={10} marginTop="default">
                    Free ?
            </Heading>
                <Switch marginLeft={32} marginBottom={10}
                    onChange={() => this.chengeCheked()} />
                <Button appearance="primary" marginLeft={210} onClick={onSubmit}>
                    Upload File
            </Button>
            </form>
        );
    }

    formGetter() {
        return new FormData(document.getElementById("customForm"));
    }



    Html(value) {
        let html = []
        for (let index = 0; index < value; index++) {
            html.push(
                <div key={this.state.lectures[index]._id} id='AddLectureContiner'>
                    <Component initialState={{
                        ['open' + index]: false, videos: [],getFile:[]
                    }}>
                        {({ state, setState }) => (
                            <div id='plusContinerAdd'>
                                <div id='plusContiner1Add' >

                                    <div id='menuAndTitle'>
                                        <div onClick={() => {
                                                axios.get(host + `api/course/ChaptersFiles/` + this.state.lectures[index]._id,
                                                { headers: { token: cookies.get('token') } })
                                                .then(response => {    
                                                    console.log(response.data);
                                                                                                  
                                                    setState({
                                                        getFile: response.data,
                                                        ['open' + index]: !state['open' + index]

                                                    })
                                                })
                                                .catch((error) => {
                                                    console.log('error ' + error);
                                                })

                                            axios.get(host + `api/course/Chapters/` + this.state.lectures[index]._id,
                                                { headers: { token: cookies.get('token') } })
                                                .then(response => {
                                                    setState({
                                                        videos: response.data,
                                                        ['open' + index]: !state['open' + index]
                                                    })
                                                })
                                                .catch((error) => {
                                                    console.log('error ' + error);
                                                })

                                        
                                        }

                                        } aria-controls="example-collapse-text" >
                                            {this.renderIcon(this.state.lectures[index]._id, state['open' + index])} {}
                                        </div>
                                        <span >{this.state.lectures[index].title}</span>
                                    </div>
                                    <div id="uploadAnddeletContiner">
                                        <Component initialState={{ isShown: false }}>
                                            {({ state, setState }) => (
                                                <Pane>
                                                    <Dialog
                                                        isShown={state.isShown}
                                                        title={'Upload File to ' + this.state.lectures[index].title}
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Upload"
                                                        onConfirm={() => {
                                                            this.uploadFile()
                                                            setState({ isShown: false })
                                                        }}
                                                    >
                                                        <p>File Name</p>
                                                        <TextInput width='100%' name="text-input-name"
                                                            placeholder="input name of file..."
                                                            onChange={(event) => this.setState({ nameFile: event.target.value })}
                                                        />
                                                        <p style={{ marginTop: 30 }}>Upload File</p>
                                                        <FilePicker
                                                            width='100%'
                                                            marginBottom={32}
                                                            onChange={files => { this.setState({ Uploadfile: files }) }}

                                                        />
                                                    </Dialog>

                                                    <Icon icon="folder-new" onClick={() => {
                                                        setState({ isShown: true })
                                                        this.setState({ chapterId: this.state.lectures[index]._id })
                                                    }}
                                                        size={20} color="selected" marginRight={16} id='iconTrushAddlecture' />
                                                </Pane>
                                            )}
                                        </Component>

                                        <Link to={`/uploadvideo?chapter=${this.state.lectures[index]._id}&course=${this.props.match.params.id}`}>
                                            <Icon icon="upload" onClick={() => {
                                                this.setState({
                                                    chapterId: this.state.lectures[index]._id
                                                })

                                            }}
                                                size={20} color="selected" marginRight={16} id='iconTrushAddlecture' />
                                        </Link>
                                        <Icon icon="trash" onClick={() => this.deleteLecture(this.state.lectures[index]._id)}
                                            size={20} color="danger" marginRight={16} id='iconTrushAddlecture' />
                                    </div>
                                </div>
                                <Collapse in={state['open' + index]}>
                                    <div id="example-collapse-text">
                      
                                        {state.videos.map((video) =>
                                            <div key={video._id} id='showVideoContiner'>
                                                <div id='iconVideoAndName'>

                                                    <Component initialState={{ isShown: false }}>
                                                        {({ state, setState }) => (
                                                            <Pane>
                                                                <Dialog
                                                                    isShown={state.isShown}
                                                                    title="No footer"
                                                                    onCloseComplete={() => setState({ isShown: false })}
                                                                    hasFooter={false}
                                                                    hasHeader={false}
                                                                >
                                                                    <Iframe url={`https://player.vimeo.com/video/${video.VideoId}?loop=1`}
                                                                        width="525px"
                                                                        height="293px"
                                                                        id="myId"
                                                                        allowFullScreen
                                                                        className="myClassname"
                                                                        display="initial"
                                                                        position="relative" />
                                                                    {/* <iframe src={`https://player.vimeo.com/video/${video.VideoId}?loop=1`} width={525}  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen loop></iframe> */}

                                                                    {/* <Vimeo
                                                                        video={video.VideoId}
                                                                        frameborder="0"
                                                                        width={525}
                                                                        loop
                                                                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                                        autoplay
                                                                    /> */}


                                                                </Dialog>
                                                                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { setState({ isShown: true }) }}>
                                                                    <Icon icon="video" size={20} color="success" marginRight={16} marginLeft={16} />
                                                                    <p id='NameofVideoInLecture'>{video.name}</p>
                                                                </div>
                                                            </Pane>
                                                        )}
                                                    </Component>

                                                </div>
                                                <div>
                                                    <Component initialState={{ isShown: false }}>
                                                        {({ state, setState }) => (
                                                            <Pane style={{ display: 'inline' }}>
                                                                <Dialog onConfirm={() => {
                                                                    {
                                                                        let formData = new FormData();
                                                                        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

                                                                        formData.append("name", this.state.editVideo);

                                                                        axios({ url: host + "api/course/editVideo/" + video._id, method: "POST", data: formData, headers: headers })
                                                                            .then(response => {
                                                                                if (response.status === 200) {
                                                                                    toaster.success("Successful"); this.componentDidMount();
                                                                                }
                                                                            })
                                                                            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
                                                                    }
                                                                    this.network(this.state.lectures[index]._id)
                                                                    this.setState({})
                                                                    setState({ isShown: false })
                                                                }}
                                                                    isShown={state.isShown}
                                                                    title="Edit Name Of Video"
                                                                    onCloseComplete={() => setState({ isShown: false })}
                                                                    confirmLabel="Add"

                                                                >
                                                                    <div id='inputofAddlecture'>
                                                                        <div id='labelOfInputAddLecture'>
                                                                            <p>Video Name</p>
                                                                        </div >
                                                                        <TextInput width='75%' name="text-input-name"
                                                                            placeholder="input Video name..."
                                                                            onChange={(event) => this.setState({ editVideo: event.target.value })}
                                                                        />
                                                                    </div>
                                                                </Dialog>
                                                                <Icon icon="edit" size={20} color="muted" marginRight={16}
                                                                    onClick={() => { setState({ isShown: true }) }}
                                                                    style={{ cursor: 'pointer' }}
                                                                />

                                                            </Pane>
                                                        )}
                                                    </Component>

                                                    <Icon icon="trash" size={20} color="muted" marginRight={16}
                                                        onClick={() => {
                                                            var headers = { "Content-Type": "application/json", token: cookies.get("token") };

                                                            axios({ url: host + "api/course/deleteVideo/" + video._id, method: "POST", headers: headers })
                                                                .then(response => {
                                                                    if (response.status === 200) {
                                                                        toaster.success("Successful");
                                                                        const lecture = state.videos.filter(sort => sort._id !== video._id);

                                                                        setState({
                                                                            videos: lecture
                                                                        })
                                                                    }
                                                                })
                                                                .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });

                                                        }} />
                                                </div>
                                            </div>
                                        )}
                                        {state.getFile.map(filess=>
                                            <div key={filess._id} id='showVideoContiner'>
                                                <div id='iconVideoAndName' style={{ cursor: 'pointer' }}
                                                onClick={()=>{
                                                    window.open(host+filess.url, '_blank');
                                                }}>
                                                    <Icon icon="document"  size={20} color="info" marginRight={16} marginLeft={16}
                                                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} />
                                                    <p id='NameofVideoInLecture'>{filess.name}</p>
                                                </div>
                                                <div>
                                                    <Icon icon="trash" size={20} color="muted" marginRight={16}
                                                    style={{ cursor: 'pointer' }} 
                                                    onClick={()=>{this.DeleteFile(filess._id)
                                                        const lecture = state.getFile.filter(sort => sort._id !== filess._id);
                                                        setState({
                                                            getFile: lecture
                                                        })
                                                    }}/>
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </Collapse>
                            </div>

                        )}
                    </Component>

                </div>

            )

        }

        this.displayDataAdt = html;
        this.setState({
            Adtdata: this.displayDataAdt,
        });


    }

    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    if (ctx.value.auth === "login") {
                        return (
                            <React.Fragment>
                                <div id='contentUpFooter'>
                                    <NavbarAllPage />

                                    <div id='titleCourseContiner'>
                                        <div id='titleCourseContiner1'>
                                            <h2 id='titleCourse'>
                                                {this.state.courseDetels.title}
                                            </h2>
                                            <p id='descripCourse'> {this.state.courseDetels.body} </p>
                                            <div className='rating'>
                                                <StarRatings rating={this.state.courseDetels.ratting} starRatedColor="gold"
                                                    starDimension='20px'
                                                    starSpacing='4px'
                                                />

                                            </div>


                                        </div>
                                        <div id='imgCardCourseContiner' > <img id='imgCardCourse' src={host + this.state.courseDetels.img} alt="img" /></div>

                                    </div>
                                    {/* )} */}
                                    <NavLink exact to='/Addcourses'>
                                        <div id='iconBack'>
                                            <Icon icon='arrow-left' size={30} color="white" />
                                        </div>
                                    </NavLink>
                                    <Component initialState={{ isShown: false }}>
                                        {({ state, setState }) => (
                                            <Pane>
                                                <Dialog onConfirm={() => {
                                                    this.addLecture()
                                                    setState({ isShown: false })
                                                }}
                                                    isShown={state.isShown}
                                                    title="Create Lecture"
                                                    onCloseComplete={() => setState({ isShown: false })}
                                                    confirmLabel="Add"

                                                >
                                                    <div id='inputofAddlecture'>
                                                        <div id='labelOfInputAddLecture'>
                                                            <p>Name of Lecture</p>
                                                        </div >
                                                        <TextInput width='75%' name="text-input-name"
                                                            placeholder="input name of leacture..."
                                                            onChange={(event) =>
                                                                this.setState({ addLecture: event.target.value, courseId: this.props.match.params.id })}
                                                        />
                                                    </div>
                                                </Dialog>

                                                <div id='AddLectureButtom'>
                                                    <Button onClick={() => setState({ isShown: true })}
                                                        appearance="primary" marginLeft={20} intent="danger">Add Lecture</Button>
                                                </div>
                                            </Pane>
                                        )}
                                    </Component>
                                    {this.displayDataAdt}
                                </div>
                                <FooterAllPage />
                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
                                <Spinner />
                            </Pane>
                        )
                    }
                }}
            </Context.Consumer>

        )
    }
}

export default AddLecture;